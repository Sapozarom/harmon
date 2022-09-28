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
class JoinGameType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        // ->add('yes', TextType::class, [
        //     'required' => false,
        //     'label' => 'Party name:',
        //     // 'attr' => [
        //     //     'class' => 'form-control form-control-lg time-input'
        //     // ],
        //     ])
        ->add('yes', SubmitType::class, [
            'label' => 'Join',
            'attr' => [
                'value' => 1
            ],
        ])
        ->add('no', SubmitType::class, [
            'label' => 'No thanks',
            'attr' => [
                'value' => 1
            ],
        ]);
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // 'data_class' => Game::class,
        ]);
    }

    
}