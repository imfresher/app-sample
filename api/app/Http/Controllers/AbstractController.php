<?php

namespace App\Http\Controllers;

class AbstractController extends Controller
{
    protected $repository;

    public function __construct($repository = null)
    {
        $this->repository = $repository;
    }
}
