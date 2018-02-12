<?php namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Hash;

class MakeUser extends Command {
    protected $signature = 'make:user
        {email : The email of the new user}
        {--password : Get prompted for password while otherwise auto generate password }
        {--role= : Specify role for new user. "admin" or "user" (default) }';

    protected $description = 'Create a new user by specifying email and (if provided) password';

    public function __construct() {
        parent::__construct();
    }

    public function handle() {
        $email = $this->argument('email');

        if(User::whereEmail($email)->count()) {
            $this->error('Email already used');
            return;
        }

        if($this->option('password')) {
            $password = $this->secret('Type user password');
        } else {
            $password = str_random(8);
        }

        if($this->option('role') && in_array($this->option('role'), ['admin', 'user'])) {
            $role = $this->option('role');
        } else {
            $role = 'user';
        }

        User::create(['email' => $email, 'password' => Hash::make($password), 'role' => $role]);

        if($this->option('password')) {
            $this->info('New user with email: "'. $email. '" was created');
        } else {
            $this->info('New user with email: "'. $email. '" was created with auto generated password: "'. $password. '"');
        }
    }
}
