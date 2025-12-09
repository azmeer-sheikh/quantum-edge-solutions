import { Star, Quote } from 'lucide-react';

interface BCSTestimonialsProps {
  cityName: string;
}

export function BCSTestimonials({ cityName }: BCSTestimonialsProps) {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1580983553600-c49a1d083f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTIyMDYwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'Business Communication Solutions transformed our entire IT infrastructure. Their team was professional, efficient, and delivered everything on time and within budget. Our network performance has improved dramatically.'
    },
    {
      name: 'Michael Chen',
      company: 'Central Texas Medical',
      role: 'IT Director',
      avatar: 'https://images.unsplash.com/photo-1662638600476-d563fffbb072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvZmVzc2lvbmFsJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTIyMDYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'We needed a reliable partner for our security camera installation and managed IT services. BCS exceeded our expectations with their expertise and ongoing support. Highly recommend them to any business in ' + cityName + '.'
    },
    {
      name: 'Jennifer Martinez',
      company: 'Retail Solutions Group',
      role: 'Operations Manager',
      avatar: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMG5ldHdvcmtpbmclMjB0ZWNobm9sb2d5JTIwc2VydmVyfGVufDF8fHx8MTc2NTIyMDYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'Outstanding service from start to finish. The fiber optic installation was completed faster than expected, and their technicians were knowledgeable and courteous. Our data transfer speeds are now incredible.'
    },
    {
      name: 'David Thompson',
      company: 'Thompson & Associates',
      role: 'Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTIxNTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'BCS installed our VOIP phone system and access control system. Both projects were handled with incredible professionalism. Their 24/7 support has been invaluable for our law firm.'
    },
    {
      name: 'Amanda Rodriguez',
      company: 'Rodriguez Manufacturing',
      role: 'President',
      avatar: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NjUyMjA2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'We have been working with Business Communication Solutions for over 3 years. Their managed IT services have saved us significant money and headaches. They are true partners in our success.'
    },
    {
      name: 'Robert Kim',
      company: 'Austin Tech Hub',
      role: 'Facilities Manager',
      avatar: 'https://images.unsplash.com/photo-1761507321147-c21f673f9f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUxNjY0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'The data cabling work BCS completed for our new office was flawless. Clean installation, thorough testing, and excellent documentation. They are our go-to for all network infrastructure needs.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#01BAEF]/10 border border-[#01BAEF]/30 text-[#0B4F6C] rounded-full text-xs sm:text-sm">
              Client Reviews
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-[#0B4F6C] px-2 sm:px-0">
            What Our Clients Say
          </h2>
          <p className="text-[#5A6C7D] max-w-3xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Don't just take our word for it - hear from businesses across {cityName} who trust us with their IT infrastructure
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-[#01BAEF] hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-3 sm:mb-4">
                <div className="inline-flex p-2 bg-[#01BAEF]/10 rounded-lg">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#01BAEF]" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#5A6C7D] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#01BAEF] to-[#20A4F3] rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-sm sm:text-base">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="text-[#0B4F6C] text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-[#5A6C7D]">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-[#01BAEF] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center px-2 sm:px-0">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl sm:rounded-2xl w-full max-w-2xl">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <div>
              <div className="text-3xl sm:text-4xl text-[#0B4F6C] mb-1 sm:mb-2">4.9 out of 5</div>
              <div className="text-[#5A6C7D] text-sm sm:text-base">Based on 200+ client reviews across {cityName}</div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4">
              <div className="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg">
                <div className="text-xs sm:text-sm text-[#5A6C7D]">Google Reviews</div>
                <div className="text-sm sm:text-base text-[#0B4F6C]">4.9/5</div>
              </div>
              <div className="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg">
                <div className="text-xs sm:text-sm text-[#5A6C7D]">BBB Rating</div>
                <div className="text-sm sm:text-base text-[#0B4F6C]">A+</div>
              </div>
              <div className="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg">
                <div className="text-xs sm:text-sm text-[#5A6C7D]">Yelp</div>
                <div className="text-sm sm:text-base text-[#0B4F6C]">5/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}