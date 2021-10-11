<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Contracts\Repositories\UserRepositoryInterface;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;

class AuthController extends V1Controller implements UserRepositoryInterface
{
    public function __construct(UserRepositoryInterface $repository)
    {
        parent::__construct($repository);
    }

    public function login(LoginRequest $request)
    {
        $params = $request->all();

        $user = $this->repository->where(['email' => $request->email])->get();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return $this->sendError();
        }

        $this->attemptLogin();

        $response = [];
        $response['name'] = $user->name;
        $response['username'] = $user->username;
        $response['email'] = $user->email;
        $response['api_token'] = $user->api_token;

        return $this->sendResponse($response);
    }

    public function register(RegisterRequest $request)
    {
        $params = $request->all();

        $user = $this->repository->getWhere(['email' => $request->email]);

        if ($user) {
            return $this->sendError();
        }

        $response = [];

        $this->repository->model->create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'api_token' => Str::random(60),
            'birthday' => $request->birthday,
            'address' => $request->address,
            'avatar' => $request->avatar,
        ]);

        $response['name'] = $params['name'];
        $response['token'] = $params['name'];

        return $this->sendResponse($response);
    }
}
