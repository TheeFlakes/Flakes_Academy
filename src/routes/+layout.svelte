<script>
    import "../app.css";
    import Footer from "../lib/components/footer.svelte";
</script>

<div class="bg-fixed bg-cover bg-center min-h-screen" style="background-image: url('/image1.jpeg')">
    <slot />
    <Footer />
</div>