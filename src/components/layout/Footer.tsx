import { Github, Twitter, Youtube, Mail } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { SocialLinks } from './SocialLinks';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Courses', href: '#' },
  { label: 'Contact', href: '#' }
];

const resources = [
  { label: 'Blog', href: '#' },
  { label: 'Documentation', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Support', href: '#' }
];

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Github, href: '#', label: 'Github' },
  { Icon: Youtube, href: '#', label: 'Youtube' },
  { Icon: Mail, href: '#', label: 'Mail' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ASTROLEX</h3>
            <p className="text-sm">
              Your gateway to the cosmos. Explore, learn, and discover the mysteries of our universe.
            </p>
          </div>
          <FooterSection title="Quick Links" links={quickLinks} />
          <FooterSection title="Resources" links={resources} />
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} ASTROLEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}