<?php

namespace Database\Factories;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Contact::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $sex = ['homme', 'femme'];

        return [
            'name' => $this->faker->userName,
            'indicatif' => rand(1, 290),
            'phone_number' => $this->faker->phoneNumber,
            'country' => $this->faker->country,
            'city' => $this->faker->streetName,
            'sex' => $sex[rand(0,1)],
        ];
    }
}
