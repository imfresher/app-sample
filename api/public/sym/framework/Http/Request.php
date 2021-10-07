<?php

namespace Sym\Http;

use Symfony\Component\HttpFoundation\Request as SymfonyRequest;

class Request extends SymfonyRequest
{
    public function __construct()
    {

    }

    public function capture()
    {
        // return $this->createFromBase();
    }
}
