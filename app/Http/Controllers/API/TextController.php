<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Text;

class TextController extends Controller {
    public function index() {
        return Text::all();
    }
    public function show($name) {
        return Text::whereName($name)->first();
    }
    public function update(Request $request, Text $text) {
        $text->update($request->all());
    }
}