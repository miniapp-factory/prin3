export function PrincessCard({
  name,
  image,
  bio,
  className,
}: {
  name: string;
  image: string;
  bio: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-muted-foreground mt-2">{bio}</p>
    </div>
  );
}
