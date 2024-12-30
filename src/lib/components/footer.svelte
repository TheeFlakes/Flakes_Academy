<script lang="ts">
  const currentYear = 2025;
  
  const footerLinks = [
    { href: '/', text: 'Home' },
    { href: '/services', text: 'Services' },
    { href: '/contact', text: 'Contact' },
    { href: '/projects', text: 'Projects' }
  ];

  const socialLinks = [
    { href: '#', icon: 'facebook', ariaLabel: 'Facebook' },
    { href: '#', icon: 'twitter', ariaLabel: 'Twitter' }, 
    { href: '#', icon: 'instagram', ariaLabel: 'Instagram' }
  ];
</script>

<footer class="bg-white shadow-lg mt-auto">
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row items-center justify-between">
      
      <!-- Logo -->
      <div class="mb-6 md:mb-0">
        <img src="/logo3.png" alt="Flakes Academy Logo" class="h-24 w-auto">
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
        {#each footerLinks as link}
          <a 
            href={link.href}
            class="text-gray-600 hover:text-gray-900 text-sm font-medium transition duration-300"
          >
            {link.text}
          </a>
        {/each}
      </nav>

      <!-- Social Links -->
      <div class="flex gap-4">
        {#each socialLinks as {href, icon, ariaLabel}}
          <a 
            {href}
            class="text-gray-400 hover:text-gray-600 transition duration-300"
            aria-label={ariaLabel}
          >
            <i class="fab fa-{icon} text-xl"></i>
          </a>
        {/each}
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 text-center text-gray-500 text-sm">
      <p>&copy; {currentYear} Flakes Academy. All rights reserved.</p>
    </div>
  </div>
</footer>
