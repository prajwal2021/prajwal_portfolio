import { redirect } from "next/navigation";

export default async function LegacySaasProductRedirect({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  redirect(`/projects/${productSlug}`);
}
