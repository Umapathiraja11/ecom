import { categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import SubcategoryPageClient from './SubcategoryPageClient';

interface SubcategoryPageProps {
  params: Promise<{
    slug: string;
    subslug: string;
  }>;
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { slug, subslug } = await params;
  
  // Find the category and subcategory
  const category = categories.find(cat => cat.slug === slug);
  const subcategory = category?.subcategories?.find(sub => sub.slug === subslug);
  
  if (!category || !subcategory) {
    notFound();
  }

  return <SubcategoryPageClient category={category} subcategory={subcategory} />;
}