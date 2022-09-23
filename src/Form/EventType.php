<?php
namespace App\Form;

use App\Entity\Event;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;


/**
 * Form used to upload log files
 */
class EventType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder

        ->add('vote', ChoiceType::class, [
            'label' => 'Your status:',
            'choices'  => [
                'I want to attend' => true,
                "I'm unavailable" => false,
            ],
        ])
        ->add('maxLength', TextType::class, [
            'label' => 'Max length (hours):',
        ])
        ->add('date', DateType ::class, [
            'label' => false,
            'required' => true,
        ])
        ->add('start', HiddenType::class, [
            'required' => true,
        ])
        ->add('finish', HiddenType::class, [
            'required' => true,
        ])
        ->add('Save', SubmitType::class, [
            
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }


}