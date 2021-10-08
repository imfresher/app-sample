<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;

class ProductController extends ApiController
{
    public function index()
    {
        return Product::all();
    }

    public function create()
    {

    }

    public function store()
    {
        return Product::create([
            'name' => 'Product One',
            'slug' => 'product-one',
            'description' => 'This is product one',
            'price' => '99.99',
        ]);
    }

    public function show()
    {

    }

    public function edit()
    {

    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
