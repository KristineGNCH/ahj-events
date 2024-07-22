# Домашнее задание к занятию "3.Обработка событий"

[![Netology AHJ](https://github.com/KristineGNCH/ahj-events/actions/workflows/web.yml/badge.svg)](https://github.com/KristineGNCH/ahj-events/actions/workflows/web.yml)

### Игра с гоблинами

![](./pic/GracefulMiniatureBustard-small.gif)

#### Легенда

Вы решили доделать игру с гоблинами, поэтому нужно реализовать оставшуюся логику.

#### Описание

Нужно доделать игру с гоблинами, реализовав следующую логику:

1. Гоблин появляется в рандомной точке (набор точек фиксирован) ровно на 1 секунду
1. Если пользователь успел за это время кликнуть на этой точке (попробуйте сделать custom-курсор в виде молотка), то:
    * пользователю засчитывается +1 балл
    * гоблин пропадает из ячейки
1. Если пользователь пропустил 5 появлений гоблинов, то игра завершается.
