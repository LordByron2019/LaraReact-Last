<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $contacts = Contact::paginate(5);

        //dd($contacts->links());

        /*return Inertia::render('Contact', [
            'contacts' => $contacts
        ]);*/

        return Inertia::render('Contact', [
            'contacts' => $contacts
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Inertia\Response
     */
    public function show(Contact $contact)
    {
//        dd($contact);
        return Inertia::render('Contact/Show', [
            'contact' => $contact,
            'previous_url' => url()->previous(),
            'update_url' => route('contact.update', $contact),
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Contact $contact)
    {
        //dd(gettype($request->toArray()));
        $request->validate([
           'name' => ['required', 'max:225'],
            'sex' => ['required'],
            'city' => ['required', 'max:225'],
            'country' => ['required', 'max:225'],
            'indicatif' => ['required', 'min:1', 'max:3'],
            'phone_number' => ['required']
        ]);

        $contact->update($request->toArray());

        return redirect()->back()->with('status', 'Contact mis à jour!');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
