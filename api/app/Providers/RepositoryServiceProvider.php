<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public static $models = [
        'User',
    ];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registRepositories();
    }

    public function registRepositories($factory = 'Eloquent')
    {
        $models = array_map('ucfirst', static::$models);

        foreach ($models as $model) {
            $this->app->singleton(
                'App\Contracts\Repositories\\' . $model . 'RepositoryInterface',
                'App\Repositories\\' . $factory . '\\' . $model . 'Repository'
            );
        }
    }

    public static function resolve($name)
    {
        return app('App\Contracts\Repositories\\' . ucfirst($name) . 'RepositoryInterface');
    }
}
