import { Github, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-400">About Us</Link></li>
              <li><Link to="/astrolearning" className="hover:text-purple-400">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-purple-400">Blog</Link></li>
              <li><Link to="/documentation" className="hover:text-purple-400">Documentation</Link></li>
              <li><Link to="/community" className="hover:text-purple-400">Community</Link></li>
              <li><Link to="/support" className="hover:text-purple-400">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/yourprofile" aria-label="Follow us on Twitter" className="hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/yourprofile" aria-label="Follow us on Github" className="hover:text-purple-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/yourprofile" aria-label="Follow us on Youtube" className="hover:text-purple-400">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:support@astrolex.com" aria-label="Email us" className="hover:text-purple-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} ASTROLEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
