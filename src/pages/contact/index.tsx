import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const contactInfo = [
  {
    Icon: Mail,
    title: 'Email',
    details: 'azizbensalah@supcom.tn \n aminchamtouri@supcom.tn',
    description: 'Send us your questions anytime'
  },
  {
    Icon: Phone,
    title: 'Phone',
    details: '+216 95 910 164',
    description: 'Mon-Fri from 8am to 5pm'
  },
  {
    Icon: MapPin,
    title: 'Location',
    details: 'ariana, Tunis'
    },
  {
    Icon: Clock,
    title: 'Working Hours',
    details: 'Monday - Friday',
    description: '8:00 AM - 5:00 PM'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-8">
              Have questions about space, our courses, or anything else? We'd love to hear from you. 
              Fill out the form below or use our contact information to reach out.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map(({ Icon, title, details, description }) => (
                <div key={title} className="bg-gray-800 p-6 rounded-lg">
                  <Icon className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-purple-400 font-medium">{details}</p>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}