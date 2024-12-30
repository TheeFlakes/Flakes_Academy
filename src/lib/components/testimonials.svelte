<script lang="ts">
  // Define the testimonials data
  const testimonials = [
    {
      quote: "The forex trading course transformed my approach to the market. I now trade with confidence.",
      author: "Alice Johnson",
      role: "Forex Trader",
      image: "https://example.com/avatars/alice-johnson.png"
    },
    {
      quote: "Thanks to the mentorship, I have doubled my trading account in just three months.",
      author: "John Smith",
      role: "Day Trader",
      image: "https://example.com/avatars/john-smith.png"
    },
    {
      quote: "The strategies taught are practical and easy to implement. Highly recommend!",
      author: "Emily Davis",
      role: "Swing Trader",
      image: "https://example.com/avatars/emily-davis.png"
    },
    {
      quote: "I learned to manage my risks better and have seen consistent profits.",
      author: "Michael Brown",
      role: "Forex Analyst",
      image: "https://example.com/avatars/michael-brown.png"
    },
    {
      quote: "The community support is amazing. I feel like I'm not trading alone anymore.",
      author: "Sarah Wilson",
      role: "Part-time Trader",
      image: "https://example.com/avatars/sarah-wilson.png"
    }
  ];
</script>

<div class="h-screen w-full flex justify-center items-center bg-white">
  <section class="bg-white w-full">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
      <div class="relative">
        {#each testimonials as testimonial, index (testimonial)}
          <figure class="max-w-screen-md mx-auto transition-opacity duration-1000 ease-in-out" style="opacity: {index === 0 ? 1 : 0};">
            <!-- Quote Icon -->
            <svg class="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
            </svg>
            <!-- Testimonial Quote -->
            <blockquote>
              <p class="text-xl font-medium text-gray-900 md:text-2xl">
                "{testimonial.quote}"
              </p>
            </blockquote>
            <!-- Author Information -->
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src={testimonial.image} alt="profile picture">
              <div class="flex items-center divide-x-2 divide-gray-500">
                <div class="pr-3 font-medium text-gray-900">{testimonial.author}</div>
                <div class="pl-3 text-sm font-light text-gray-500">{testimonial.role}</div>
              </div>
            </figcaption>
          </figure>
        {/each}
      </div>
    </div>
  </section>
</div>
