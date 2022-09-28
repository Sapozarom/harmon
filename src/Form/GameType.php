<?php
namespace App\Form;

use App\Entity\Game;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

/**
 * Form used to upload log files
 */
class GameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('name', TextType::class, [
            'required' => false,
            'label' => 'Party name:',
            // 'attr' => [
            //     'class' => 'form-control form-control-lg time-input'
            // ],
        ])
        ->add('title', TextType::class, [
            'required' => false,
            'label' => 'Activity name:',
        ])
        ->add('description', TextareaType::class, [
            'required' => false,
            'label' => 'Descriprion:',
        ])
        ->add('minSessionLength', TextType::class, [
            'required' => false,
            'label' => 'Minimal session length (minutes):',
        ])
        ->add('Save', SubmitType::class, [
            // 'attr' => [
            //     'class' => 'btn btn-dark btn-lg'
            // ],
        ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Game::class,
        ]);
    }
}