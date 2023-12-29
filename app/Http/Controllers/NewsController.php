<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use Inertia\Inertia;
use App\Models\News;
use App\Models\User;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Homepage', [
            'title' => "Gamingland",
            'description' => "Portal Berita Seputar Game dan E-sport",
            'news' => $news,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $news = new News();
        $news->title = $request->title;
        $news->alt = $request->alt;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return redirect()->back()->with('message', 'berita berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */

    public function show(News $news)
    {
        $myNews = $news::where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myNews' => $myNews,

        ]);
    }

    public function sortByCategory(string $category)
    {
        $myNews = News::where('category', $category)->get();
        return Inertia::render('Category', [
            'news' => $myNews,
            'category' => $category,
            'title' => 'Gamingland',
        ]);
    }


    public function sortByAuthor(string $author)
    {
        $myNews = News::where('author', $author)->get();
        return Inertia::render('Author', [
            'news' => $myNews,
            'category' => $author,
            'title' => 'Gamingland',
        ]);
    }

    public function articleDetails(int $id)
    {
        $myNews = News::where('id', $id)->get();
        return Inertia::render('ArticleDetails', [
            'news' => $myNews,
            'title' => 'Gamingland',

        ]);
        // return Inertia::render('ArticleDetails');
    }
    // Lakukan apa pun yang diperlukan dengan nilai $category di sini
    // Contoh:



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews' => $news->find($request->id),
            'title' => 'Gamingland',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);
        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'berita berhasil dihapus');
    }
}
