<?php namespace App\Http\Middleware;

use Closure;

class SocialDriver {
    public function handle($request, Closure $next) {
        return $next($request);
    }
}
