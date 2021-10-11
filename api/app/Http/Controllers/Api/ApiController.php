<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AbstractController;

class ApiController extends AbstractController
{
    public function sendResponse($result, $code = 200)
    {
        $response['data'] = $result;
        $response['status'] = $code;

        return response()->json($response, $code);
    }

    public function sendError()
    {
        $response['data'] = [];

        return response()->json($response);
    }
}
