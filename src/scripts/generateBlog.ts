import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import slugify from 'slugify';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../../../scripts/config/.env.local') });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface MetaInfo {
  title: string;
  excerpt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  date: string;
  author: string;
  coverImage: string;
  slug: string;
  relatedPosts: string[];
}

const languages = [
  'en', 'zh', 'es', 'fr', 
  'de', 'ja', 'pa', 'jv', 
  'ko', 'vi', 'tr', 'sw', 
  'it', 'fa', 'ar', 'bn', 
  'pt', 'ru', 'ur', 'hi', 
  'ta', 'pl'
];

async function generateContent(topic: string): Promise<string> {
  console.log(chalk.blue('🤖 Generating blog content...'));
  console.time('Content Generation');
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a fitness expert writing detailed blog posts. Use markdown formatting but DO NOT include an H1 heading (the title) as it's already displayed on the page. Start your content with H2 headings. Include lists and emphasis where appropriate. Write in a professional but engaging tone."
        },
        {
          role: "user",
          content: `Write a comprehensive blog post about: ${topic}`
        }
      ]
    });

    console.timeEnd('Content Generation');
    console.log(chalk.green('✅ Content generated successfully'));
    return response.choices[0].message.content || '';
  } catch (error) {
    console.error(chalk.red('❌ Error generating content:'), error);
    throw error;
  }
}

async function generateMetaInfo(content: string, topic: string): Promise<MetaInfo> {
  console.log(chalk.blue('🔍 Generating meta information...'));
  console.time('Meta Generation');
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Generate SEO-optimized meta information for a blog post in JSON format. Include excerpt (2-3 sentences), tags (3-4 relevant terms), and seoDescription."
        },
        {
          role: "user",
          content: `Create meta information for this blog post:\n\n${content}`
        }
      ],
      response_format: { type: "json_object" }
    });

    console.timeEnd('Meta Generation');
    console.log(chalk.green('✅ Meta information generated successfully'));
    
    const meta = JSON.parse(response.choices[0].message.content || '{}');
    return {
      ...meta,
      title: topic,
      seoTitle: `${topic} | OneRepMax`,
      date: new Date().toISOString().split('T')[0],
      author: 'AI Writer',
      coverImage: '/images/blog/placeholder.png',
      slug: slugify(topic.toLowerCase()),
      relatedPosts: []
    };
  } catch (error) {
    console.error(chalk.red('❌ Error generating meta information:'), error);
    throw error;
  }
}

async function generateImage(topic: string): Promise<string> {
  console.log(chalk.blue('🎨 Generating blog post image...'));
  console.time('Image Generation');
  
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Create a wide, horizontal composition for a fitness blog about: ${topic}. The image should be professional, motivational, and suitable for a fitness website. Focus on proper form and technique.`,
      n: 1,
      size: "1792x1024",
      quality: "standard",
      style: "natural"
    });

    console.timeEnd('Image Generation');
    console.log(chalk.green('✅ Image generated successfully'));
    return response.data[0].url || '';
  } catch (error) {
    console.error(chalk.red('❌ Error generating image:'), error);
    throw error;
  }
}

async function translateContent(content: string, langCode: string): Promise<string> {
  console.log(chalk.blue(`🌐 Translating content to ${langCode}...`));
  console.time(`Translation-${langCode}`);
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional translator. If the input is JSON, maintain the JSON structure and only translate the string values while keeping the keys in English. Translate the content accurately while maintaining the original formatting and markdown structure."
        },
        {
          role: "user",
          content: `Translate the following content to ${langCode}:\n\n${content}`
        }
      ]
    });

    console.timeEnd(`Translation-${langCode}`);
    console.log(chalk.green(`✅ Content translated to ${langCode} successfully`));
    return response.choices[0].message.content || '';
  } catch (error) {
    console.error(chalk.red(`❌ Error translating to ${langCode}:`), error);
    throw error;
  }
}

async function saveBlogPost(content: string, meta: MetaInfo) {
  console.log(chalk.blue('💾 Saving blog post...'));
  console.time('Save Operation');
  
  try {
    const postDir = join(process.cwd(), 'src/data/blog/posts', meta.slug);
    console.log(`Creating directory: ${postDir}`);
    await mkdir(postDir, { recursive: true });

    // Save meta.json
    console.log('Saving meta.json...');
    await writeFile(
      join(postDir, 'meta.json'),
      JSON.stringify(meta, null, 2)
    );

    // Save English version
    console.log('Saving English version...');
    await writeFile(
      join(postDir, 'en.json'),
      JSON.stringify({
        meta,
        content
      }, null, 2)
    );

    // Generate and save translations
    console.log('Generating translations...');
    for (const lang of languages) {
      if (lang === 'en') continue;
      
      console.log(`Processing ${lang} translation...`);
      try {
        const translatedContent = await translateContent(content, lang);
        const translatedMeta = await translateContent(JSON.stringify({
          title: meta.title,
          excerpt: meta.excerpt,
          seoTitle: meta.seoTitle,
          seoDescription: meta.seoDescription,
          tags: meta.tags
        }), lang);

        await writeFile(
          join(postDir, `${lang}.json`),
          JSON.stringify({
            meta: {
              ...JSON.parse(translatedMeta),
              date: meta.date,
              author: meta.author,
              coverImage: meta.coverImage,
              slug: meta.slug,
              relatedPosts: meta.relatedPosts
            },
            content: translatedContent
          }, null, 2)
        );
        console.log(chalk.green(`✅ Saved ${lang} translation`));
      } catch (error) {
        console.error(chalk.red(`❌ Error saving ${lang} translation:`), error);
      }
    }

    console.timeEnd('Save Operation');
    console.log(chalk.green('✅ Blog post saved successfully'));
  } catch (error) {
    console.error(chalk.red('❌ Error saving blog post:'), error);
    throw error;
  }
}

async function generateBlogPost(topic: string) {
  console.log(chalk.yellow('🚀 Starting blog post generation'));
  console.time('Total Generation Time');
  
  try {
    const content = await generateContent(topic);
    const meta = await generateMetaInfo(content, topic);
    const imageUrl = await generateImage(topic);
    meta.coverImage = imageUrl;
    
    await saveBlogPost(content, meta);
    
    console.timeEnd('Total Generation Time');
    console.log(chalk.green('✨ Blog post generation completed successfully'));
  } catch (error) {
    console.error(chalk.red('❌ Fatal error during blog post generation:'), error);
    process.exit(1);
  }
}

// Get topic from command line arguments
const topic = process.argv[2];
if (!topic) {
  console.error(chalk.red('❌ Please provide a topic as a command line argument'));
  process.exit(1);
}

generateBlogPost(topic);