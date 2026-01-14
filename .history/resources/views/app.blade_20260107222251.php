<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Basic -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO -->
    <title>Ashutosh Nandani | Laravel Full Stack Developer</title>
    <meta name="description" content="Ashutosh Nandani - Laravel Full Stack Developer with experience in Laravel, Vue.js, MySQL & Flutter.">
    <meta name="keywords" content="Laravel Developer, Vue Developer, Full Stack Developer, PHP Developer">
    <meta name="author" content="Ashutosh Nandani">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    >

    <!-- Favicon / Logo for Title Tab -->
    <link rel="icon" type="image/png" href="{{ asset('images/unnamed.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('images/unnamed.png') }}">

    <!-- Theme Color (Mobile browser) -->
    <meta name="theme-color" content="#0d6efd">

    <!-- App -->
    @vite('resources/js/app.js')

    <style>
        /* Initial Loader (Before Vue loads) */
        #app-loader {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: 'Poppins', sans-serif;
            background: #0f172a;
            color: #ffffff;
        }
    </style>
</head>


<body>
    <!-- App Loader -->
    {{--  <div id="app-loader">
        <div>
            <h2>Loading Portfolio...</h2>
            <p>Laravel • Vue • Full Stack</p>
        </div>
    </div>  --}}

    <!-- Vue App Mount -->
    <div id="app"></div>

    <script>
        // Remove loader once Vue is mounted
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new MutationObserver(() => {
                const app = document.getElementById('app');
                if (app && app.children.length > 0) {
                    document.getElementById('app-loader')?.remove();
                    observer.disconnect();
                }
            });
            observer.observe(document.getElementById('app'), { childList: true });
        });
    </script>
</body>
</html>
