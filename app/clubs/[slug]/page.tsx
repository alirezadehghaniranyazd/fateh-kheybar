import { notFound } from "next/navigation";
import { clubs } from "@/data/clubs";
import {
  ClubHero,
  ClubAbout,
  ClubCoach,
  ClubSchedule,
} from "@/components/Club";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ClubPage({ params }: Props) {
  const { slug } = await params;

  const club = clubs.find((item) => item.slug === slug);

  if (!club) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6">
      <ClubHero
        title={club.title}
        description={club.shortDescription}
        image={club.image}
      />

      <ClubAbout description={club.description} features={club.features} />

      <ClubSchedule schedule={club.schedule} />

      <ClubCoach
        coach={club.coach}
        degree={club.degree}
        experience={club.experience}
      />
    </main>
  );
}
