type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#114b33]">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-[#2C2C2C] sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[#1F2937]">{description}</p>
    </div>
  );
}