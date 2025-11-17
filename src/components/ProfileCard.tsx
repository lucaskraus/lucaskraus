import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export default function ProfileCard() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/lucaskraus',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/lucaskraus',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/lucaskraus',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@lucaskraus.com',
      color: 'hover:text-green-400'
    },
    {
      name: 'Website',
      icon: Globe,
      url: 'https://lucaskraus.com',
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <div className="relative group">
      {/* Metallic glow effect */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-gray-400 via-gray-200 to-gray-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
      
      {/* Main card */}
      <div className="relative bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-700/50">
        {/* Silver metallic top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gray-300 to-transparent opacity-60"></div>
        
        {/* Profile section */}
        <div className="flex flex-col items-center space-y-6">
          {/* Profile image with metallic frame */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-br from-gray-300 via-gray-500 to-gray-700 rounded-full blur-sm"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400/30 shadow-xl">
              <img
                src="https://avatars.githubusercontent.com/u/123456789?v=4"
                alt="Lucas Kraus"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23374151" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="%23fff"%3ELK%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Name and title */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold bg-linear-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Lucas Kraus
            </h2>
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              Developer & Designer
            </p>
          </div>

          {/* Divider with metallic effect */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Social media links */}
          <div className="flex gap-4 flex-wrap justify-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/icon relative p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg hover:border-gray-500`}
                  aria-label={social.name}
                >
                  {/* Icon glow on hover */}
                  <div className="absolute inset-0 rounded-lg bg-linear-to-br from-white/0 to-white/5 opacity-0 group-hover/icon:opacity-100 transition-opacity"></div>
                  <Icon className="w-5 h-5 relative z-10" />
                </a>
              );
            })}
          </div>

          {/* Bio or description */}
          <p className="text-gray-500 text-center text-sm max-w-md leading-relaxed">
            Building digital experiences with modern web technologies. 
            Passionate about clean code and beautiful design.
          </p>
        </div>

        {/* Bottom metallic accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent opacity-40"></div>
      </div>
    </div>
  );
}

