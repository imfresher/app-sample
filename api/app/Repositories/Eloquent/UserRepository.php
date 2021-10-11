<?php

namespace App\Repositories\Eloquent;

use App\Contracts\Repositories\UserRepositoryInterface;
use App\Models\User;

class UserRepository extends EloquentRepository implements UserRepositoryInterface
{
    public function __construct(User $user)
    {
        parent::__construct($user);
    }

    public function getWhere($where = [])
    {
        $this->model
            ->where($where)
            ->get();
    }

    public function getData($column = '*', $where = [])
    {
        $this->model
            ->select($column)
            ->where($where)
            ->get();
    }
}
