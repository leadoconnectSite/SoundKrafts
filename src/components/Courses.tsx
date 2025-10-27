interface Course {
    title: string;
    description: string;
    price: string;
    image: string;
  }
  
  const Courses = () => {
    const courses: Course[] = [
      {
        title: 'Beginner DJ Course',
        description: 'Master the fundamentals of DJing with hands-on lessons covering beat matching, mixing, and transitions.',
        price: '$49',
        image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        title: 'Advanced DJ Techniques',
        description: 'Take your skills to the next level with advanced scratching, effects, and live performance techniques.',
        price: '$79',
        image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        title: 'EDM Music Production',
        description: 'Learn to produce professional EDM tracks using Ableton Live and FL Studio from industry experts.',
        price: '$99',
        image: 'https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ];
  
    return (
      <section id="courses" className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Choose the perfect course to start your DJ journey
          </p>
  
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-400">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">{course.price}</span>
                    <button className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg border border-orange-500/50 hover:bg-orange-500 hover:text-white transition-all">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Courses;
  