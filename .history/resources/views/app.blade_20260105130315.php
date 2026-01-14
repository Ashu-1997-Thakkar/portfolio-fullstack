<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{ config('app.name', 'AshutoshPortfolio') }}</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <!-- Vite Assets -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-[Poppins] bg-gray-50 text-gray-800">

    <!-- Header -->
    <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 class="text-xl font-bold">Ashutosh</h1>
            <nav class="space-x-6 text-sm font-medium">
                <a href="/" class="hover:text-blue-600">Home</a>
                <a href="#about" class="hover:text-blue-600">About</a>
                <a href="#projects" class="hover:text-blue-600">Projects</a>
                <a href="#contact" class="hover:text-blue-600">Contact</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="min-h-screen">
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-12">
        <div class="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
            © {{ date('Y') }} Ashutosh Nandani. All rights reserved.
        </div>
    </footer>

</body>
</html>
