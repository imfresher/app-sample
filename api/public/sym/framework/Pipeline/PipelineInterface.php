<?php

namespace Sym\Pipeline;

interface PipelineInterface
{
    public function send($data);

    public function through($pipes);

    public function then($callback);
}
