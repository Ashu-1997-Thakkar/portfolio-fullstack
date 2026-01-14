<template>
  <!-- ================= APP BAR ================= -->
  <v-app-bar
    flat
    height="80"
    class="navbar"
    :class="{ scrolled: isScrolled }"
  >
    <v-container fluid class="px-6">
      <div class="navbar-content">
        
        <!-- BRAND (Left-aligned) -->
        <div class="brand" @click="goHome">
          <span class="brand-name">Ashutosh</span>
          <span class="brand-surname">Nandani (Thakkar)</span>
        </div>

     <!-- DESKTOP LINKS (Center/Right-aligned) -->
<!-- DESKTOP LINKS -->
<nav class="nav-links d-none d-md-flex">
  <v-btn
    v-for="link in links"
    :key="link.name"
    :to="link.url"
    variant="text"
    class="nav-btn"
    :class="{ active: route.path === link.url }"
    :style="navTextStyle(link.url)"
  >
    {{ link.name }}
  </v-btn>
</nav>

        <!-- RIGHT SECTION -->
        <div class="right-section d-none d-md-flex">
          <!-- Resume Button -->
          <v-btn
            variant="outlined"
            class="resume-btn"
            href="/resume/Ashutosh-Hareshkumar-Nandani-1997.pdf"
            target="_blank"
          >
            RESUME
          </v-btn>

          <!-- Theme Toggle Switch -->
          <div class="theme-toggle-wrapper">
            <v-icon size="20" class="theme-icon">
              {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
            </v-icon>
            <v-switch
              v-model="isDarkModel"
              @update:model-value="toggleTheme"
              color="#22d3ee"
              hide-details
              inset
              density="compact"
              class="theme-switch"
            ></v-switch>
          </div>
        </div>

        <!-- MOBILE MENU BUTTON -->
        <div class="mobile-menu-btn d-md-none">
          <v-btn
            icon
            variant="text"
            @click="drawer = true"
          >
            <v-icon size="28">mdi-menu</v-icon>
          </v-btn>
        </div>

      </div>
    </v-container>
  </v-app-bar>

  <!-- ================= MOBILE DRAWER ================= -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="mobile-drawer"
    width="280"
  >
    <div class="drawer-header">
      <div class="drawer-brand">
        <span class="brand-name">Ashutosh</span>
        <span class="brand-surname">Nandani</span>
      </div>
      <v-btn icon variant="text" @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-divider class="my-2"></v-divider>

    <v-list nav density="compact" class="px-2">
      <v-list-item
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        @click="drawer = false"
        :active="route.path === link.url"
        class="mobile-nav-item"
        rounded="lg"
      >
        <v-list-item-title class="mobile-nav-title">
          {{ link.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <div class="drawer-footer">
      <v-btn
        block
        variant="outlined"
        color="#22d3ee"
        size="large"
        class="resume-btn-mobile"
        href="/resume/Ashutosh-Hareshkumar-Nandani-1997.pdf"
        target="_blank"
        @click="drawer = false"
      >
        RESUME
      </v-btn>
      
      <div class="mobile-theme-toggle">
        <span class="theme-label">Dark Mode</span>
        <v-switch
          v-model="isDarkModel"
          @update:model-value="toggleTheme"
          color="#22d3ee"
          hide-details
          inset
        ></v-switch>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../../store/appStore'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const drawer = ref(false)
const isScrolled = ref(false)

const isDark = computed(() => appStore.darkMode)
const isDarkModel = computed({
  get: () => appStore.darkMode,
  set: () => {}
})
const navTextStyle = (url) => {
  // Active link
  if (route.path === url) {
    return {
      color: isDark.value ? '#ffffff' : '#000000'
    }
  }

  // Normal link
  return {
    color: isDark.value
      ? 'rgba(255,255,255,0.8)'
      : 'rgba(0,0,0,0.8)'
  }
}

const links = [
  { name: 'HOME', url: '/' },
  { name: 'ABOUT', url: '/about' },
  { name: 'SKILLS', url: '/skills' },
  { name: 'EXPERIENCE', url: '/experience' },
  { name: 'PROJECTS', url: '/projects' },
  { name: 'CONTACT', url: '/contact' },
]

const toggleTheme = () => appStore.toggleTheme()
const goHome = () => router.push('/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
/* ================= NAVBAR ================= */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar.scrolled {
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 24px;
}

/* ================= BRAND ================= */
.brand {
  cursor: pointer;
  display: flex;
  align-items: baseline;
  gap: 8px;
  user-select: none;
  transition: transform 0.2s ease;
}

.brand:hover {
  transform: translateY(-1px);
}

.brand-name {
  font-size: 1.35rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.brand-surname {
  font-size: 1.35rem;
  font-weight: 800;
  color: #22d3ee;
  letter-spacing: -0.5px;
}

/* ================= NAVIGATION LINKS ================= */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: flex-end;
  margin-right: 8px;
}

.nav-btn {
  font-weight: 600;
  font-size: 0.8rem;
  /* color: rgba(20, 20, 20, 0.8) !important; */
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 8px 16px !important;
  min-width: unset !important;
  height: 40px !important;
   padding: 8px 16px !important;
  height: 40px !important;
   transition: color 0.3s ease, background 0.3s ease;
}

.nav-btn:hover {
  background: rgba(99, 102, 241, 0.1);
}

.nav-btn.active {
  color: #141414 !important;
}

.nav-btn.active::after {
content: '';
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
background: linear-gradient(90deg, #6366f1, #22d3ee);
  border-radius: 2px;
}

/* ================= RESUME BUTTON ================= */
.resume-btn {
  border: 2px solid #6366f1 !important;
  color: #6366f1 !important;
  font-weight: 700 !important;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 24px !important;
  height: 40px !important;
  border-radius: 8px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
}

.resume-btn:hover {
  background: linear-gradient(135deg, #6366f1, #7c3aed) !important;
  color: #fff !important;
  border-color: #7c3aed !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
}

/* ================= THEME TOGGLE ================= */
.theme-toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 6px 12px 6px 14px;
  transition: all 0.3s ease;
}

.theme-toggle-wrapper:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
}

.theme-icon {
  color: rgba(255, 255, 255, 0.7) !important;
  transition: color 0.3s ease;
}

.theme-switch {
  margin: 0;
}

.theme-switch :deep(.v-switch__track) {
  width: 44px;
  height: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  opacity: 1;
}

.theme-switch :deep(.v-switch__thumb) {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.theme-switch :deep(.v-selection-control) {
  min-height: unset;
}

/* ================= MOBILE MENU ================= */
.mobile-menu-btn {
  display: flex;
  align-items: center;
}

/* ================= MOBILE DRAWER ================= */
.mobile-drawer {
  background: linear-gradient(180deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%);
  backdrop-filter: blur(20px);
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.drawer-brand {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.drawer-brand .brand-name {
  font-size: 1.2rem;
  font-weight: 800;
}

.drawer-brand .brand-surname {
  font-size: 1rem;
  font-weight: 700;
}

.mobile-nav-item {
  margin-bottom: 4px;
  transition: all 0.2s ease;
}

.mobile-nav-title {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.9) !important;
}

.drawer-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(17, 24, 39, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.resume-btn-mobile {
  margin-bottom: 16px;
  font-weight: 700;
  letter-spacing: 1px;
}

.mobile-theme-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.theme-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 0.95rem;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 960px) {
  .brand-name,
  .brand-surname {
    font-size: 1.15rem;
  }
}

@media (max-width: 600px) {
  .navbar {
    height: 70px;
  }
  
  .brand-name,
  .brand-surname {
    font-size: 1rem;
  }
}
</style>
