<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\AbstractRequest;

class RegisterRequest extends AbstractRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|string|unique:users|max:255',
            'email' => 'required|string|email|unique:users|max:255',
        ];
    }
}
