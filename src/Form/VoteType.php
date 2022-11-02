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
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;

/**
 * Form used to upload log files
 */
class VoteType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('vote', ChoiceType::class, [
            'label' => false,
            'choices'  => [
                "I'm in" => true,
                "I'm out" => false,
            ],
        ])
        // ->add('date', DateType ::class, [
        //     'label' => false,
        //     'required' => true,
        // ])
        // ->add('startTime', TimeType::class, [
        //     'required' => true,
        // ])
        // ->add('finishTime', TimeType::class, [
        //     'required' => true,
        // ])
        ;

    }
    
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'csrf_protection' => false,
            'data_class' => Event::class,
        ]);
    }

    
}