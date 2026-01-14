<!-- ============================================ -->
<!-- FILE: resources/js/views/Home.vue -->
<!-- ============================================ -->
<template>
    <div class="home-page">
        <!-- Hero Section -->
        <section class="hero-section">
            <v-container class="hero-container">
                <v-row align="center" class="min-vh-100">
                    <v-col cols="12" md="6" data-aos="fade-right">
                        <div class="hero-content">
                            <div class="greeting mb-4">
                                <span class="wave">👋</span>
                                <span class="text-h6 ml-2">Hello, I'm</span>
                            </div>
                            <h1 class="hero-title mb-4">
                                <span class="gradient-text">Ashutosh</span>
                            </h1>
                            <h2 class="text-h4 mb-6 typing-text">
                                <span ref="typingText"></span>
                                <span class="cursor">|</span>
                            </h2>
                            <p class="text-h6 text-grey mb-8 hero-description">
                                A passionate Full Stack Developer who loves crafting beautiful, 
                                functional, and user-centered digital experiences.
                            </p>
                            <div class="hero-buttons">
                                <v-btn
                                    size="x-large"
                                    color="primary"
                                    class="mr-4 hero-btn-primary"
                                    prepend-icon="mdi-briefcase"
                                    to="/projects"
                                >
                                    View My Work
                                </v-btn>
                                <v-btn
                                    size="x-large"
                                    variant="outlined"
                                    color="primary"
                                    class="hero-btn-secondary"
                                    prepend-icon="mdi-email"
                                    to="/contact"
                                >
                                    Get In Touch
                                </v-btn>
                            </div>
                            <div class="social-links mt-8">
                                <v-btn
                                    v-for="social in socialLinks"
                                    :key="social.name"
                                    :href="social.url"
                                    target="_blank"
                                    icon
                                    variant="text"
                                    class="social-icon"
                                    size="large"
                                >
                                    <v-icon>{{ social.icon }}</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" data-aos="fade-left">
                        <div class="hero-image-container">
                            <div class="floating-card card-1">
                                <v-icon color="primary" size="40">mdi-vuejs</v-icon>
                            </div>
                            <div class="floating-card card-2">
                                <v-icon color="secondary" size="40">mdi-laravel</v-icon>
                            </div>
                            <div class="floating-card card-3">
                                <v-icon color="accent" size="40">mdi-language-javascript</v-icon>
                            </div>
                            <div class="hero-image glass-effect">
                                <v-icon size="200" color="primary">mdi-code-tags</v-icon>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            
            <!-- Animated Background -->
            <div class="animated-bg">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section py-16">
            <v-container>
                <v-row>
                    <v-col 
                        v-for="(stat, index) in stats" 
                        :key="index"
                        cols="12" 
                        sm="6" 
                        md="3"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div class="stat-card glass-effect text-center pa-6">
                            <v-icon size="50" :color="stat.color" class="mb-4">
                                {{ stat.icon }}
                            </v-icon>
                            <h3 class="text-h3 gradient-text mb-2">{{ stat.value }}</h3>
                            <p class="text-body-1">{{ stat.label }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Featured Projects Section -->
        <section class="projects-section py-16">
            <v-container>
                <div class="section-header text-center mb-12" data-aos="fade-up">
                    <h2 class="text-h3 mb-4">Featured <span class="gradient-text">Projects</span></h2>
                    <p class="text-h6 text-grey">Check out some of my recent work</p>
                </div>

                <v-row>
                    <v-col 
                        v-for="(project, index) in featuredProjects" 
                        :key="index"
                        cols="12" 
                        md="4"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <v-card 
                            class="project-card glass-effect h-100"
                            hover
                            @click="$router.push(`/projects/${project.id}`)"
                        >
                            <div class="project-image">
                                <v-img
                                    :src="project.image"
                                    height="250"
                                    cover
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                                >
                                    <div class="project-overlay">
                                        <v-chip 
                                            v-for="tech in project.technologies.slice(0, 2)"
                                            :key="tech"
                                            size="small"
                                            class="ma-1"
                                            color="primary"
                                        >
                                            {{ tech }}
                                        </v-chip>
                                    </div>
                                </v-img>
                            </div>
                            <v-card-text>
                                <h3 class="text-h5 mb-3">{{ project.title }}</h3>
                                <p class="text-grey">{{ project.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn 
                                    variant="text" 
                                    color="primary"
                                    append-icon="mdi-arrow-right"
                                >
                                    View Details
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn 
                                    v-if="project.github_url"
                                    icon 
                                    variant="text"
                                    :href="project.github_url"
                                    target="_blank"
                                >
                                    <v-icon>mdi-github</v-icon>
                                </v-btn>
                                <v-btn 
                                    v-if="project.live_url"
                                    icon 
                                    variant="text"
                                    :href="project.live_url"
                                    target="_blank"
                                >
                                    <v-icon>mdi-open-in-new</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>

                <div class="text-center mt-12" data-aos="fade-up">
                    <v-btn
                        size="large"
                        color="primary"
                        to="/projects"
                        append-icon="mdi-arrow-right"
                    >
                        View All Projects
                    </v-btn>
                </div>
            </v-container>
        </section>

        <!-- Skills Section -->
        <section class="skills-section py-16">
            <v-container>
                <div class="section-header text-center mb-12" data-aos="fade-up">
                    <h2 class="text-h3 mb-4">Technical <span class="gradient-text">Skills</span></h2>
                    <p class="text-h6 text-grey">Technologies I work with</p>
                </div>

                <v-row>
                    <v-col 
                        v-for="(category, name) in skillsByCategory" 
                        :key="name"
                        cols="12" 
                        md="6"
                        data-aos="fade-up"
                    >
                        <div class="skill-category glass-effect pa-6">
                            <h3 class="text-h5 mb-6">{{ name }}</h3>
                            <div 
                                v-for="skill in category" 
                                :key="skill.id"
                                class="skill-item mb-4"
                            >
                                <div class="d-flex justify-space-between mb-2">
                                    <span class="font-weight-medium">{{ skill.name }}</span>
                                    <span class="text-primary">{{ skill.proficiency }}%</span>
                                </div>
                                <v-progress-linear
                                    :model-value="skill.proficiency"
                                    color="primary"
                                    height="8"
                                    rounded
                                ></v-progress-linear>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- CTA Section -->
        <section class="cta-section py-16">
            <v-container>
                <div class="cta-card gradient-bg pa-12 text-center" data-aos="zoom-in">
                    <h2 class="text-h3 mb-4 text-white">Let's Work Together</h2>
                    <p class="text-h6 mb-8 text-white">
                        Have a project in mind? Let's create something amazing together!
                    </p>
                    <v-btn
                        size="x-large"
                        color="white"
                        class="text-primary"
                        prepend-icon="mdi-email"
                        to="/contact"
                    >
                        Start a Conversation
                    </v-btn>
                </div>
            </v-container>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const typingText = ref(null);

const socialLinks = [
    { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com' }
];

const stats = [
    { value: '3+', label: 'Years Experience', icon: 'mdi-calendar-clock', color: 'primary' },
    { value: '50+', label: 'Projects Completed', icon: 'mdi-briefcase-check', color: 'secondary' },
    { value: '30+', label: 'Happy Clients', icon: 'mdi-account-group', color: 'accent' },
    { value: '15+', label: 'Technologies', icon: 'mdi-code-tags', color: 'primary' }
];

const featuredProjects = ref([
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with payment integration',
        image: 'https://picsum.photos/400/300?random=1',
        technologies: ['Laravel', 'Vue.js', 'MySQL'],
        github_url: 'https://github.com',
        live_url: 'https://example.com'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates',
        image: 'https://picsum.photos/400/300?random=2',
        technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        github_url: 'https://github.com',
        live_url: 'https://example.com'
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'Modern portfolio website with admin dashboard',
        image: 'https://picsum.photos/400/300?random=3',
        technologies: ['Laravel', 'Vuetify', 'Tailwind'],
        github_url: 'https://github.com',
        live_url: 'https://example.com'
    }
]);

const skills = ref([
    { id: 1, name: 'Laravel', category: 'Backend', proficiency: 90 },
    { id: 2, name: 'PHP', category: 'Backend', proficiency: 85 },
    { id: 3, name: 'MySQL', category: 'Backend', proficiency: 80 },
    { id: 4, name: 'Vue.js', category: 'Frontend', proficiency: 85 },
    { id: 5, name: 'JavaScript', category: 'Frontend', proficiency: 80 },
    { id: 6, name: 'Tailwind CSS', category: 'Frontend', proficiency: 85 }
]);

const skillsByCategory = computed(() => {
    return skills.value.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
});

// Typing Animation
onMounted(() => {
    const roles = ['Full Stack Developer', 'Laravel Expert', 'Vue.js Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeText = () => {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        if (typingText.value) {
            typingText.value.textContent = currentRole.substring(0, charIndex);
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeText, typeSpeed);
    };

    typeText();
});
</script>

<style scoped>
.home-page {
    overflow-x: hidden;
}

/* Hero Section */
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.animated-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.circle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(34, 211, 238, 0.1));
    animation: float 20s ease-in-out infinite;
}

.circle-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
}

.circle-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 10%;
    animation-delay: -5s;
}

.circle-3 {
    width: 150px;
    height: 150px;
    bottom: 10%;
    left: 50%;
    animation-delay: -10s;
}

.greeting {
    display: flex;
    align-items: center;
}

.wave {
    font-size: 32px;
    animation: wave-animation 2s ease-in-out infinite;
}

@keyframes wave-animation {
    0%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
}

.hero-title {
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
}

.gradient-text {
    background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.typing-text {
    min-height: 60px;
}

.cursor {
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.hero-btn-primary {
    background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);
    transition: all 0.3s ease;
}

.hero-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
}

.social-icon {
    transition: all 0.3s ease;
}

.social-icon:hover {
    transform: translateY(-3px);
    color: #6366F1;
}

/* Hero Image */
.hero-image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
}

.hero-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: float 6s ease-in-out infinite;
}

.floating-card {
    position: absolute;
    padding: 20px;
    border-radius: 16px;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.card-1 {
    top: 10%;
    left: 10%;
    animation: float 8s ease-in-out infinite;
}

.card-2 {
    top: 60%;
    right: 10%;
    animation: float 10s ease-in-out infinite;
    animation-delay: -2s;
}

.card-3 {
    bottom: 10%;
    left: 20%;
    animation: float 12s ease-in-out infinite;
    animation-delay: -4s;
}

/* Stats Section */
.stat-card {
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.stat-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

/* Projects Section */
.project-card {
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

.project-image {
    position: relative;
    overflow: hidden;
}

.project-overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 1;
}

/* Skills Section */
.skill-category {
    border-radius: 20px;
}

/* CTA Section */
.cta-card {
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.gradient-bg {
    background: linear-gradient(135deg, #6366F1 0%, #22D3EE 100%);
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@media (max-width: 960px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .hero-image-container {
        margin-top: 50px;
    }
}
</style>