import { redirect } from 'next/navigation';

export async function GET() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

  if (!resumeUrl) {
    redirect('/');
  }
  
  redirect(resumeUrl);
}