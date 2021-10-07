<?php

namespace Sym\Pipeline;

class Pipeline implements PipelineInterface
{
    protected $passable;
    protected $pipes = [];
    protected $method = 'handle';

    public function __construct()
    {

    }

    public function send($passable)
    {
        $this->passable = $passable;

        return $this;
    }

    public function through($pipes)
    {
        $this->pipes = is_array($pipes) ? $pipes : func_get_args();

        return $this;
    }

    public function then($callback)
    {
        $pipeline = array_reduce(
            array_reverse($this->pipes()),
            $this->carry(),
            $this->destCallback($callback)
        );

        return $pipeline($this->passable);
    }

    protected function pipes()
    {
        return $this->pipes;
    }

    protected function destCallback($callback)
    {
        return function ($passable) use ($callback) {
            return $callback($passable);
        };
    }

    protected function carry()
    {
        return function ($stack, $pipe) {
            var_dump($stack);
            var_dump($pipe);

            return function ($passable) use ($stack, $pipe) {
                return 1;
            };
        };
    }
}
