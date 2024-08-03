<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Ortigas Condo Sharing') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="{{ asset('layout/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="{{ asset('layout/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('layout/dist/css/adminlte.min.css') }}">
    <link rel="stylesheet" href="{{ asset('layout/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
    <script src="{{ asset('layout/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('layout/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    {{-- <style>
     #loader{
         position: fixed;
         left: 0px;
         top: 0px;
         width: 100%;
         height: 100%;
         z-index: 9999;
         background: url('{{ asset("assets/assets/loading/output-onlinegiftools (1).gif") }}') 50% 50% no-repeat rgb(249,249,249);
         opacity: 1;
     }
    </style> --}}
      {{-- <script src="{{ asset('assets/assets/js/jquery.min.js') }}"></script> --}}
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
    <script>
        $.widget.bridge('uibutton', $.ui.button)
    </script>
    {{-- <script src="{{ asset('assets/assets/js/jquery.min.js') }}"></script>
    <script type="text/javascript">
        $(window).on('load', function(){
            setTimeout(function(){
                $('#loader').fadeOut('slow');
            }, 300);
        });
     </script> --}}
    <script src="{{ asset('layout/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('layout/plugins/chart.js/Chart.min.js') }}"></script>
    <script src="{{ asset('layout/plugins/sparklines/sparkline.js') }}"></script>
    <script src="{{ asset('layout/dist/js/adminlte.js') }}"></script>
    {{-- <script src="{{ asset('layout/dist/js/pages/dashboard.js') }}"></script> --}}
</html>
