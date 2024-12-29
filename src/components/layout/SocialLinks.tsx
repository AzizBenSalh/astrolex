import { LucideIcon } from 'lucide-react';

interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex space-x-4">
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="hover:text-purple-400"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}