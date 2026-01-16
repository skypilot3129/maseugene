import { notFound } from 'next/navigation';
import { portfolioItems } from '@/data/portfolio';
import CaseStudyDetail from '../../../components/CaseStudyDetail';

export async function generateStaticParams() {
    return portfolioItems.map((project) => ({
        slug: project.id,
    }));
}

export default async function ProjectPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const project = portfolioItems.find((item) => item.id === slug);

    if (!project) {
        notFound();
    }

    return <CaseStudyDetail project={project} />;
}
