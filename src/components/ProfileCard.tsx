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
    <div className='flex rounded-xl metallic-button p-4'></div>
  );
}

