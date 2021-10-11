<?php

namespace App\Repositories\Eloquent;

use App\Repositories\AbstractRepository;
use Illuminate\Database\Eloquent\Model;

class EloquentRepository extends AbstractRepository
{
    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

     public function __call($method, $parameters)
    {
        return call_user_func_array([$this->model, $method], $parameters);
    }
}
