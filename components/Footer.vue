<template>
  <footer class="inset-x-0 bg-primary text-secondary">
    <div class="container p-3 mx-auto space-y-2 md:flex md:justify-between">
      <div class="flex items-center justify-between max-w-sm space-x-4">
        <img
          loading="lazy"
          src="@/assets/logo/cfc_logo_white_full.svg"
          alt="Coders for Causes wordmark"
          class="object-contain h-10 sm:h-12"
        />
        <a href="http://codersforcauses.org">
          Back to Main Website
        </a>
      </div>
      <p class="font-mono text-xs">
        Made with &#10084;
        <br />
        <small>
          &copy; {{ new Date().getFullYear() }} Coders for Causes
        </small>
      </p>
    </div>
  </footer>
</template>
