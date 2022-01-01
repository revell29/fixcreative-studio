export const API_URL = 'https://api.fixcreative-studio.com';
export const LOCAL_API = 'http://localhost:3000';
export const TOKEN =
  '4868ff0e7611d3a67a3143937f542b2fdc713d066b46a65eb662126ae364c3c6803e245dbb304719823a7f67522a5fbe4e9987b3190891f84be63642bf3f8b5dc128d835b63d14494b1d3732b73a33de54219919102e3ed39317f6577cffd6589c0b6632df9b96919a5637a6da0122d17acff9728820df59b0f61ccc65dcd835';
const THUMB_URL = `${API_URL}/uploads/meta_image_59fbbc395c.png?updated_at=2022-01-01T20:29:04.025Z`;

export const DEFAULT_SEO = {
  title: 'Fix Creative Studio',
  description: 'In the of Photography and Videography',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://fixcreative-studio.com',
    title: 'Fix Creative Studio',
    description: 'In the of Photography and Videography',
    image: THUMB_URL,
    site_name: 'fixcreative-studio.com',
    imageWidth: 1200,
    imageHeight: 600,
  },
  twitter: {
    handle: '@fixcreative',
    cardType: 'summary_large_image',
  },
};
