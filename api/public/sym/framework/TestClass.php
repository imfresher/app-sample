<?php

namespace Sym;

// use Symfony\Component\HttpFoundation\Request;
use Illuminate\Http\Request;

class TestClass
{
    public function test(Request $request)
    {
        var_dump($request); die();
    }
}
