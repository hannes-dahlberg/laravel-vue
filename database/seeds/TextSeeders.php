<?php

use Illuminate\Database\Seeder;
use App\Models\Text;

class TextSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Text::truncate();
        Text::insert([[
            'name' => 'home',
            'content' => '<p>Home</p>'
        ], [
            'name' => 'about',
            'content' => '<p>About</p>'
        ], [
            'name' => 'contact',
            'content' => '<p>Contact</p>'
        ]]);
    }
}
