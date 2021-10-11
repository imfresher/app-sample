<?php

namespace App\Repositories;

class AbstractRepository
{
    public $model;

    public function __construct($model = null)
    {
        $this->model = $model;
    }
}
