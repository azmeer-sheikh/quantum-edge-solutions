export interface BCSService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const bcsServices: BCSService[] = [
  {
    id: 'data-cabling',
    title: 'Data Installation Cabling Services',
    description: 'Professional structured cabling infrastructure including CAT5e, CAT6, and CAT6a installations with certified testing and comprehensive documentation for optimal network performance.',
    icon: 'Cable'
  },
  {
    id: 'fiber-cabling',
    title: 'Fiber Cabling Installation',
    description: 'High-performance fiber optic cabling solutions for bandwidth-intensive applications. Expert installation of single-mode and multi-mode fiber with fusion splicing and OTDR testing.',
    icon: 'Zap'
  },
  {
    id: 'security-cameras',
    title: 'Security Camera Installation',
    description: 'Advanced IP surveillance systems with 4K resolution cameras, remote monitoring capabilities, intelligent analytics, night vision, and cloud-based recording solutions.',
    icon: 'Camera'
  },
  {
    id: 'network-installation',
    title: 'Computer Network Installation',
    description: 'Complete network design, deployment, and optimization services. Enterprise-grade switches, routers, wireless systems, and network infrastructure for maximum reliability.',
    icon: 'Network'
  },
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    description: 'Comprehensive IT management with 24/7 monitoring, proactive maintenance, help desk support, patch management, backup solutions, and strategic IT planning for your business.',
    icon: 'Server'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    description: 'Enterprise-grade security solutions including firewall management, intrusion detection, threat monitoring, security audits, compliance support, and employee security training.',
    icon: 'Shield'
  },
  {
    id: 'access-control',
    title: 'Access Control Installation Services',
    description: 'Smart access control systems with keycard readers, biometric authentication, mobile credentials, visitor management, and integration with existing security infrastructure.',
    icon: 'Lock'
  },
  {
    id: 'voip',
    title: 'VOIP Phone System Services',
    description: 'Modern cloud-based VoIP phone systems with HD voice quality, auto-attendant, advanced call routing, conferencing, mobile integration, and unified communications.',
    icon: 'Phone'
  }
];
